import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { data } from './data';
import { SampleBase } from './sample-base';
export class StickyHeader extends SampleBase {
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <GridComponent dataSource={data} enableStickyHeader={true}>
                        <ColumnsDirective>
                            <ColumnDirective field='OrderID' headerText='Order ID' width='150' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='CustomerName' headerText='Customer Name' width='160'></ColumnDirective>
                            <ColumnDirective field='OrderDate' headerText='Order Date' width='155' format='yMd' textAlign='Right'/>
                            <ColumnDirective field='Freight' headerText='Freight' width='130' format='C2' textAlign='Right'/>
                            <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='155' format='yMd' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='ShipName' headerText='Ship Name' width='170'></ColumnDirective>
                        </ColumnsDirective>
                    </GridComponent>
                </div>
            </div>);
    }
}

render(<StickyHeader />, document.getElementById('sample'));