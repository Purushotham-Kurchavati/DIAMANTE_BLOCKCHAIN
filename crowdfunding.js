const { Keypair, TransactionBuilder, Operation, BASE_FEE, Aurora, Asset } = require("diamnet-sdk");
const auroraServerUrl = "https://diamtestnet.diamcircle.io/";
const server = new Aurora.Server(auroraServerUrl);

const sourceSecretKey = "SCCCPVUVMHUD42QNKXMFPWQ2HUYJJS3E76XEY622DHMTRBAOUHLDLRIE"; // Replace with your source account's secret key
const sourceKeypair = Keypair.fromSecret(sourceSecretKey);
const sourcePublicKey = sourceKeypair.publicKey();

// Create a campaign account
const createCampaignAccount = () => {
  return Keypair.random();
};

// Fund campaign account
const fundCampaignAccount = async (campaign) => {
  const response = await fetch(
    `https://friendbot.diamcircle.io/?addr=${campaign.publicKey()}`
  );
  if (!response.ok) {
    throw new Error(
      `Failed to activate account ${campaign.publicKey()}: ${response.status}`
    );
  }
  console.log(`Funded campaign: ${campaign.publicKey()}`);
};

// Create a campaign asset
const createCampaignAsset = (campaign) => {
  return new Asset(`CAMPAIGN`, campaign.publicKey());
};

// Create trustlines for the campaign asset
const createCampaignTrustlines = async (asset, pair) => {
  const account = await server.loadAccount(pair.publicKey());
  const transaction = new TransactionBuilder(account, {
    fee: BASE_FEE,
    networkPassphrase: "Diamante Testnet 2024",
  })
    .addOperation(Operation.changeTrust({ asset }))
    .setTimeout(100)
    .build();

  transaction.sign(pair);
  await server.submitTransaction(transaction);
  console.log("Trustlines created");
};

// Issue campaign tokens to funders
const issueCampaignTokens = async (asset, campaign, funders, amountPerFunder) => {
  for (let funder of funders) {
    const account = await server.loadAccount(campaign.publicKey());

    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: "Diamante Testnet 2024",
    })
      .addOperation(
        Operation.payment({
          destination: funder.publicKey(),
          asset,
          amount: amountPerFunder.toString(),
        })
      )
      .setTimeout(100)
      .build();

    transaction.sign(campaign);
    await server.submitTransaction(transaction);
    console.log(
      `Issued ${amountPerFunder} ${asset.code} to ${funder.publicKey()}`
    );
  }
};

// Fund the campaign by exchanging DIAM for campaign tokens
const fundCampaign = async (funderKeypair, campaignAsset, amount, campaignKeypair) => {
  try {
    const account = await server.loadAccount(funderKeypair.publicKey());

    const transaction = new TransactionBuilder(account, {
      fee: BASE_FEE,
      networkPassphrase: "Diamante Testnet 2024",
    })
      .addOperation(
        Operation.payment({
          destination: campaignKeypair.publicKey(),
          asset: Asset.native(),
          amount: amount.toString(),
        })
      )
      .setTimeout(100)
      .build();

    console.log(
      `Funder ${funderKeypair.publicKey()} funding campaign with ${amount} DIAM`
    );

    transaction.sign(funderKeypair);
    const result = await server.submitTransaction(transaction);

    console.log("Funding transaction result:", result);
  } catch (error) {
    console.error(
      "Error during funding:",
      error.response ? error.response.data : error.message
    );
    if (error.response && error.response.data && error.response.data.extras) {
      console.error(
        "Operation result codes:",
        error.response.data.extras.result_codes.operations
      );
    }
  }
};

// Main function to run the crowdfunding setup
const runCrowdfundingSetup = async () => {
  try {
    const campaign = createCampaignAccount();
    await fundCampaignAccount(campaign);
    const campaignAsset = createCampaignAsset(campaign);
    await createCampaignTrustlines(campaignAsset, sourceKeypair);

    const funders = [];
    const numFunders = 1;
    for (let i = 0; i < numFunders; i++) {
      const funderKeypair = Keypair.random();
      await fetch(
        `https://friendbot.diamcircle.io/?addr=${funderKeypair.publicKey()}`
      );
      console.log(`Funded funder: ${funderKeypair.publicKey()}`);
      await createCampaignTrustlines(campaignAsset, funderKeypair);
      funders.push(funderKeypair);
    }

    const fundAmount = 5;
    for (let funder of funders) {
      await fundCampaign(funder, campaignAsset, fundAmount, campaign);
    }

    const totalTokens = 5;
    const tokensPerFunder = (totalTokens / numFunders).toFixed(7);
    await issueCampaignTokens(
      campaignAsset,
      campaign,
      funders,
      tokensPerFunder
    );
  } catch (error) {
    console.error("Error during crowdfunding setup:", error);
  }
};

runCrowdfundingSetup().catch(console.error);
