import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
declare var $: any;

@Component({
  selector: 'oms-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DateTimePickerComponent implements OnInit {
  constructor() {}

  cb(start, end, label) {
    $('#reportrange span').html(
      label +
        ': ' +
        start.format('MMMM D, YYYY') +
        ' - ' +
        end.format('MMMM D, YYYY')
    );
  }

  ngOnInit() {
    $('#reportrange').daterangepicker(
      {
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        ranges: {
          Today: [moment(), moment()],
          Yesterday: [
            moment().subtract(1, 'days'),
            moment().subtract(1, 'days')
          ],
          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
          'This Month': [moment().startOf('month'), moment().endOf('month')],
          'Last Month': [
            moment()
              .subtract(1, 'month')
              .startOf('month'),
            moment()
              .subtract(1, 'month')
              .endOf('month')
          ]
        },
        opens: 'left',
        
      },
      this.cb
    );
    this.cb(moment().subtract(29, 'days'), moment(), 'Last 30 Days');
  }
}
