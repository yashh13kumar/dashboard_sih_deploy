import React from 'react';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from '@syncfusion/ej2-react-grids';
import Navbar from '../components/Navbar';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const BailGrantedCases = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  const newCustomersData = customersData.filter((x) => {
    return x.Status === 'Bailed and Released';
  });

  return (
    <div className="md:mr-10 md:ml-10 mt-2 md:pr-10 md:pl-10 bg-white rounded-3xl">
      <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
        <Navbar />
      </div>
      <Header category="Page" title="Bail Granted Cases" />
      <GridComponent
        dataSource={newCustomersData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default BailGrantedCases;
