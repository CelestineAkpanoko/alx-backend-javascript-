'use strict'

export { getListStudents };

const getListStudents = () => {
    array = new Array();

    array.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
    array.push({ id: 2, firstName: 'James', location: 'Columbia' });
    array.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });

    return array;
}