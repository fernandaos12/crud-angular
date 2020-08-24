import { Clientesclasse } from './clientesclasse';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private db: AngularFireDatabase) { }

insert(cliente: Clientesclasse) {
  this.db.list('cliente').push(cliente)
    .then((result: any) => {
      console.log(result.key);
    });
}

update(cliente: Clientesclasse, key: string) {
  this.db.list('cliente').update(key, cliente)
    .catch((error: any) => {
      console.error(error);
    });
}

getAll() {
  return this.db.list('cliente').snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() as {} }));
      })
    );
}

delete (key: string) {
  this.db.object(`cliente/${key}`).remove();
}


}