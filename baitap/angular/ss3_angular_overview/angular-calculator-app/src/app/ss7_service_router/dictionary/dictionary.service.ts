import { Injectable } from '@angular/core';
import {IWord} from './model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {word: 'son', mean: 'thiểu năng'},
    {word: 'huy', mean: 'làm qick < 5'},
    {word: 'giang', mean: 'lửng mật'},
    {word: 'hải', mean: 'Đẹp trai'},
    {word: 'CôngNT', mean: 'Dễ thương'},
    {word: 'trungdang', mean: 'Dễ thương sơ sơ tại hay phạt em'}
  ];
  constructor() { }

  getWords() {
    return this.words;
  }

  findByWord(word: any) {
    for (let i = 0; i < this.words.length; i++) {
      if(this.words[i].word === word){
        return this.words[i];
      }
    }
    return undefined;
  }
}
