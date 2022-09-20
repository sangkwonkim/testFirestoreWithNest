import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';


@Injectable()
export class AppService {

  
  
  getHello() {
    
    const work = () => {
      const firebaseAdmin = admin.initializeApp({ 
        credential: admin.credential.cert({
          // projectId:
          // privateKey: 
          // clientEmail:
        }), 
      });
        firebaseAdmin.firestore().collection('test').doc('testing').get()
        .then((shot) => {
          console.log(shot['_fieldsProto'])
          return shot.data()
        })
      }
      work();
  }
}
