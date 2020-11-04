import React from 'react';
import ReactDOM from 'react-dom';

const Shape = ({ state, handleChange, handlePoint,addPoint, RemovePoint }) => {
	const SVG = document.getElementById('svg');
	const { width, height, circle, xradius, yradius, x1, x2, y1, y2, color, shape, polyline, polygon, points, points2 } = state;
	

	console.log(SVG);

	let polyg = [];
	let polyl = [];
    console.log(polyline)
	let rect = React.createElement('rect', { width: width, x: 50, y: 50, stroke: color, height: height });
	let Line = React.createElement('line', { x1: x1, x2: x2, y1: y1, y2: y2, stroke: color });
    let circ = React.createElement('circle', { r: circle, cx: 180, cy: 75, stroke: color });
    let Ellipse = React.createElement('ellipse', {cx:55, cy:75, rx:xradius, ry:yradius, stroke: color})
    let P1 = React.createElement('polygon', {points:points2.trimEnd(), stroke:color})
    let P2 = React.createElement('polyline', {points:points.trimEnd(), stroke:color})
    
console.log(points.trimEnd())
	for (let index = 0; index <polyline; index++) {
		polyl.push(<input className='form-input' name="points" onChange={addPoint} type="number" placeholder="point" />);
	}

	for (let index = 0; index <polygon; index++) {
		polyg.push(<input className='form-input' name="points2" onChange={addPoint} type="number" placeholder="point" />);
	}

	switch (shape) {
		case 'Rectangle':
			return (
				<div className="options">
					<div>
						<input className='form-input' name="width" id="width" onChange={handleChange} type="number" placeholder="width" />
						<label for="width" class="form__label">
							Width
						</label>
					</div>

					<input className='form-input' name="height" id="height" onChange={handleChange} type="number" placeholder="height" />
					<label for="height" class="form__label">
						Height
					</label>
                    {ReactDOM.createPortal(rect, SVG)}
					
				</div>
			);

		case 'Circle':
			return (
				<div className="options">
                    <input className='form-input' name="circle" onChange={handleChange} type="number" placeholder="radius" />
                    <label for="circle" class="form__label">
						Radius
					</label>
                    {ReactDOM.createPortal(circ, SVG)}
                   
                    
				</div>
			);

		case 'Ellipse':
			return (
				<div className="options">
                    <input className='form-input' name="xradius"  onChange={handleChange} type="number" placeholder="xradius" />
                    <label for="xradius" class="form__label">
						Xradius
					</label>
                    <input className='form-input' name="yradius"  onChange={handleChange} type="number" placeholder="yradius" />
                    <label for="yradius" class="form__label">
						Yradius
					</label>
                    {ReactDOM.createPortal(Ellipse, SVG) }
				</div>
			);

		case 'Line':
			return (
				<div className="options">
                    <input className='form-input' name="x1" onChange={handleChange} type="number" placeholder="x1" />
                    <label for="x1" class="form__label">
						x1
					</label>
                    <input className='form-input' name="x2" onChange={handleChange} type="number" placeholder="x2" />
                    <label for="x2" class="form__label">
						x2
					</label>
                    <input className='form-input' name="y1" onChange={handleChange} type="number" placeholder="y2" />
                    <label for="y1" class="form__label">
						y1
					</label>
                    <input className='form-input' name="y2" onChange={handleChange} type="number" placeholder="y2" />
                    <label for="y2" class="form__label">
						y2
					</label>
					{ReactDOM.createPortal(Line, SVG)}
				</div>
			);

		case 'Polygon':
			return (
				<div >
					{polyg}
					<button onClick={() => handlePoint(Object.keys(state)[0])}>Add New Point</button>
                    <button onClick={() => RemovePoint(Object.keys(state)[0])}>Remove Point</button>
                    {ReactDOM.createPortal(P1, SVG)}
				</div>
			);
		case 'PolyLine':
			return (
				<div >
					{polyl}
					<button onClick={() => handlePoint(Object.keys(state)[1])}>Add New Point</button>
                    <button onClick={() => RemovePoint(Object.keys(state)[1])}>Remove Point</button>
                    {ReactDOM.createPortal(P2, SVG)}
				</div>
			);
		default:
			return <p className="default">Please Pick A Shape</p>;
	}
};

export default Shape;
