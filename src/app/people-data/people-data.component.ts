import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../peopleServices';

@Component({
  selector: 'app-people-data',
  templateUrl: './people-data.component.html',
  styleUrls: ['./people-data.component.css'],
})
export class PeopleDataComponent implements OnInit {
  peopleData: sampleData[] = [];
  displayData: sampleData[] = [];
  incrementCounter = 0;
  indexIncrement = 0;
  numberOfItemsDisplay = 3;
  constructor(private peopleService: PeopleService) {}

  async ngOnInit(): Promise<void> {
    await this.getPeopleDataList();
  }

  async getPeopleDataList() {
    this.peopleService.getPeopleData().subscribe({
      next: (res) => {
        console.log('**********response from service*********', res);
        this.peopleData = res;
        this.displayData = this.peopleData.slice(0, this.numberOfItemsDisplay);
        this.incrementCounter = this.incrementCounter + 1;
      },
    });
  }

  onNextClick() {
    this.displayData = this.peopleData.slice(
      this.numberOfItemsDisplay * this.incrementCounter,
      this.numberOfItemsDisplay * (this.incrementCounter + 1)
    ); //data will come but not updated data
    console.log('*****onNextClick *******', this.displayData);

    this.incrementCounter = this.incrementCounter + 1; // 2 3 4

    console.log('**onNextClick incrementCounter***', this.incrementCounter);

    this.indexIncrement++;
  }
  onPrevious() {
    console.log('*****incrementCounter*******', this.incrementCounter);

    if (this.incrementCounter > 1) {
      this.incrementCounter = this.incrementCounter - 1;
      console.log(
        this.numberOfItemsDisplay * (this.incrementCounter - 1),
        ' ***previous**',
        this.numberOfItemsDisplay * this.incrementCounter
      );

      this.displayData = this.peopleData.slice(
        this.numberOfItemsDisplay * (this.incrementCounter - 1),
        this.numberOfItemsDisplay * this.incrementCounter
      );
      console.log('***** numberOfItemsDisplayRemoves*****', this.displayData);
      this.indexIncrement--;
    } else {
      return;
    }
  }
}
export interface sampleData {
  name: string;
  location: string;
}
