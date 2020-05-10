import {ExcelComponent} from '@core/ExcelComponent';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    return `
  <div class="row">

    <div class="row-info"></div>

    <div class="row-data">

        <div class="col">
            A
        </div>
        <div class="col">
            B
        </div>
        <div class="col">
            C
        </div>
        

    </div>

</div>

<div class="row">

    <div class="row-info">1</div>

    <div class="row-data">
        <div class="cell" contenteditable>a1</div>
        <div class="cell" contenteditable>B2</div>
        <div class="cell" contenteditable>C3</div>
    </div>

</div>
<div class="row">

    <div class="row-info">2</div>

    <div class="row-data">
        <div class="cell selected" contenteditable>a1</div>
        <div class="cell" contenteditable>B2</div>
        <div class="cell" contenteditable>C3</div>
    </div>

</div>
    `
  }
}
