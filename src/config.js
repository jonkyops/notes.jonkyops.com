export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    BUCKET: 'jonkyops-notes-attachments'
  },
  apiGateway: {
    URL: 'https://vi051oett4.execute-api.us-east-1.amazonaws.com/dev',
  },
  cognito: {
    USER_POOL_ID : 'us-east-1_7KAbwNatF',
    APP_CLIENT_ID : '538c0aet2cup5lgqcq83sm2gb0',
    REGION: 'us-east-1',
    IDENTITY_POOL_ID: 'us-east-1:4df86ff0-7da1-4296-880b-08ce91034a30',
  }
};
