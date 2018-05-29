import {Observable} from "rxjs/Observable";


export class ChecklistModel {
  checklist: any;
  checklistObserver: any;

  constructor(public title: string, public items: any[]) {
    this.items = items;
    // this.title = title;

    this.checklist = Observable.create(observer => {
      this.checklistObserver = observer;
    })
  }


  addItem(item): void {

    this.items.push({title: item, checked: false});
  }

  removeItem(item): void {
    let index = this.items.indexOf(item);

    if(index > -1) {
      this.items.splice(index, 1);
    }
  }

  renameItem(item, title): void {
    let index = this.items.indexOf(item);

    if(index > -1) {
      this.items[index].title = title;
    }
  }

  setTitle(title): void {
    this.title = title;
  }

  toggleItem(item): void {
    item.checked = !item.checked;
  }

  checklistUpdates(): Observable<any> {
    return this.checklist;
  }


}

