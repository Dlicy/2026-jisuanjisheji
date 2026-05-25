const { createDeepSeekChat } = require('./deepseek');
const { createSparkChat } = require('./iflytek');

const sparkConfig = {
  appid: process.env.SPARK_APPID || '3efb053a',
  apiKey: process.env.SPARK_API_KEY || '3d73d5b03ccb0cd8834bb87797c45232',
  apiSecret: process.env.SPARK_API_SECRET || 'MzgzMzMwYWMzYjZlMzhiYmM0OWQ2Njc0',
  domain: 'lite',
};

const PROVIDER = process.env.AI_PROVIDER || 'deepseek';

function createAIChat() {
  if (PROVIDER === 'deepseek') {
    return createDeepSeekChat();
  } else {
    return createSparkChat(sparkConfig);
  }
}

module.exports = {
  createAIChat,
  PROVIDER
};