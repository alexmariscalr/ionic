import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: Place[] = [
    {
    id: '1',
    title: 'Eiffel Tower',
    imageURL: 'https://viajes.nationalgeographic.com.es/medio/2019/03/29/torre-eiffel-hoy_f7a97d88_1200x1821.jpg',
    comments: ['Un lugar fascinante','Wonderful experience'],

    },

    {
      id: '2',
      title: 'Statue of Liberty',
      imageURL: 'https://viajes.nationalgeographic.com.es/medio/2021/03/15/istock-989260044-ccbc19b5-1500x1000_a10f0fb1_550x807.jpeg',
      comments: ['Un lugar fascinante','Awesome place'],
  
      }
    
  ]

  constructor() { }

  getPlaces () {
    return [...this.places]
  }

  addPlace(title:string, imageURL:string) {
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    })
  }

  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

  getPlace(placeId: string){
    return {
    ...this.places.find(place => {
      return place.id === placeId
    })
  }
}



}
