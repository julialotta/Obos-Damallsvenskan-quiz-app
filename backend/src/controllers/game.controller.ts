import { Request, Response } from "express";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../db";

export const get_scoreByGameID = async (req: Request, res: Response) => {
  const q = query(
    collection(db, "portfolio"),
    where("id", "==", parseInt(req.params.id))
  );
  let list: DocumentData[] = [];
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    list.push(doc.data());
  });
  res.send(list);
};

export const get_allScores = async (req: Request, res: Response) => {
  try {
    const q = query(collection(db, "portfolio"));
    let list: DocumentData[] = [];

    const querySnapshot = await getDocs(q);
    console.log("====================================");
    console.log("querysnapshot", querySnapshot);
    console.log("====================================");
    querySnapshot.forEach((doc) => {
      console.log("====================================");
      console.log("kör for each");
      console.log("====================================");
      list.push(doc.data());
    });
    res.send(list);
  } catch (error) {
    res.send(error);
  }
};

export const set_scoreByGameID = async (req: Request, res: Response) => {
  const data = req.body;
  await addDoc(collection(db, "portfolio"), data);
  res.sendStatus(200);
};
