import { S3Client, PutObjectCommand, DeleteObjectCommand } from "@aws-sdk/client-s3";
import "dotenv/config";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.IAM_USER_KEY,
    secretAccessKey: process.env.IAM_USER_SECRET,
  },
});

export default {
  IAM_USER_KEY: process.env.IAM_USER_KEY,
  IAM_USER_SECRET: process.env.IAM_USER_SECRET,
  BUCKET_NAME: process.env.BUCKET_NAME,
  AWS_REGION: process.env.AWS_REGION,

  // Função para upload de arquivos no S3
  uploadToS3: function (file, filename, acl = "public-read") {
    return new Promise(async (resolve, reject) => {
      const params = {
        Bucket: this.BUCKET_NAME,
        Key: filename,
        Body: file.data,
        ACL: acl,
      };

      const command = new PutObjectCommand(params);

      try {
        const data = await s3Client.send(command);
        console.log("Upload Success: ", data);
        resolve({ error: false, message: data });
      } catch (err) {
        console.log("Upload Error: ", err);
        reject({ error: true, message: err.message });
      }
    });
  },

  // Função para deletar arquivos do S3
  deleteFileS3: function (key) {
    return new Promise(async (resolve, reject) => {
      const params = {
        Bucket: this.BUCKET_NAME,
        Key: key,
      };

      const command = new DeleteObjectCommand(params);

      try {
        const data = await s3Client.send(command);
        console.log("Delete Success: ", data);
        resolve({ error: false, message: data });
      } catch (err) {
        console.log("Delete Error: ", err);
        reject({ error: true, message: err.message });
      }
    });
  },
};
