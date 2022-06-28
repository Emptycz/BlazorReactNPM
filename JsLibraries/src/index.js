import { renderProgressBar } from './constructors/progressbar.jsx';
import { renderHelloWorldBox } from './constructors/helloWorldBox.js';

export function RenderProgressBar(count) {
    return renderProgressBar(count);
}

export function RenderHelloWorldBox() {
    return renderHelloWorldBox();
}