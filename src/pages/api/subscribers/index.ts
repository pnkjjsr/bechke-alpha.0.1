// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextConnect from "next-connect";
import firebase from "@/libs/firebase";

export interface NextApiRequestExtended extends NextApiRequest {
  id: string;
  email: string;
  type: string;
}

type Data = {
  type: string;
  email: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const db = firebase.firestore();

  let collections: any = [];
  let colRef = db.collection("subscribers");

  await colRef.get().then((snapshot) => {
    if (snapshot.empty) return null;

    snapshot.forEach((doc) => {
      collections.push(doc.data());
    });
  });

  res.statusCode = 200;
  res.json(collections);
}
