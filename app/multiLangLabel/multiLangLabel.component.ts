import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'multi-lang-label',
    templateUrl: 'app/multiLangLabel/multiLangLabel.component.html',
})
export class MultiLangLabelComponent implements OnInit {

    /**
    * Display as Label or Content.
    */
    @Input('isLable') isLable: Boolean;

    /**
     * model object which has to be binded in display element.
     */
    @Input('displayValue') displayValue: any;

    /**
     * model object key this used to read the property of the model to display.
     * 
     * IMPORTANT.
     */
    @Input('valueKey') valueKey: string;

    constructor() {
    }

    ngOnInit() {
        let self = this;
        console.log(self.isLable);
        console.log(self.valueKey);
        console.log(self.displayValue);
    }

}
