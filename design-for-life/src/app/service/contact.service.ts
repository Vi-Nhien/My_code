
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';


export interface IPodcast {
  id: string
  android: string
  category: string
  description: string
  itunes: string
  name: string
  rss: string
  source: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private aft: AngularFirestore) { }

  // addPodcast(podcast : IPodcast){
  //   podcast.id = this.aft.createId()
  //   return this.aft.collection('IPodcast').add(podcast)
  // }

  // getAllPodcast(){
  //   return this.aft.collection('IPodcast').snapshotChanges()
  // }

}
