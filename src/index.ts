import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { servicePost } from './service/index';

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    const flux$ = Observable.fromPromise(servicePost()).do(console.log);

    flux$.subscribe(() => {})

    return element;
}

document.body.appendChild(component());

