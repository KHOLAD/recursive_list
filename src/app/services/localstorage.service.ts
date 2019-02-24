import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalstorageService {
  set(payload: any) {
    localStorage.setItem("lists", JSON.stringify(payload))
  }

  get(key: string) {
    try {
      JSON.parse(localStorage.getItem(key))
    } catch(err) {
      this.remove(key)
      this.set([])
      return []
    }
    return JSON.parse(localStorage.getItem((key)))
  }

  remove(key: string) {
    localStorage.removeItem(key)
  }
}
