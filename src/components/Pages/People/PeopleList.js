import React, {Component} from 'react';
import ItemList from '../../Row/ItemList/ItemList';
import withData from './../../hocs/withData';
import SWAPIService from './../../../services/SWAPIService';

const SWAPI = new SWAPIService();

const PeopleList = withData(ItemList, SWAPI.getAllPeople);


export default PeopleList;