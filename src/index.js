import './index.css'
import { Controller } from './controller.js'
import { Model } from './model';
import { View } from './view';

const app = new Controller(new Model(), new View());

app.startApp();