import "./Carrousel.scss";
import { Component } from "react";
import { ReactComponent as ChevronLeft } from "./chevron-left.svg";
import { ReactComponent as ChevronRight } from "./chevron-right.svg";

export default class Carrousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentSlide: 0,
		};
	}

	componentDidMount() {
		setInterval(() => {
			if (this.state.paused === false) {
				let newSlide =
					this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
				this.setState({ currentSlide: newSlide });
			}
		}, 4000);
	}

	next() {
		let newSlide =
			this.state.currentSlide === this.props.pictures.length - 1 ? 0 : this.state.currentSlide + 1;
		this.setState({ currentSlide: newSlide });
	}

	prev() {
		let newSlide =
			this.state.currentSlide === 0 ? this.props.pictures.length - 1 : this.state.currentSlide - 1;
		this.setState({ currentSlide: newSlide });
	}

	setCurrentSlide = (index) => {
		this.setState({ currentSlide: index });
	};

	render() {
		return (
			<div className="container">
				<div className="carrousel">
					<div className="carrousel__navigation">
						<ChevronLeft
							className="chevron"
							onClick={() => {
								this.prev();
							}}
						/>

						<ChevronRight
							className="chevron"
							onClick={() => {
								this.next();
							}}
						/>
					</div>

					{this.props.pictures.map((picture, index) => {
						return (
							<img
								alt=""
								src={picture}
								key={index}
								className={index === this.state.currentSlide ? "carrousel__img" : "hide-img"}
							></img>
						);
					})}

					<span className="carrousel__legend">
						{this.state.currentSlide + 1}/{this.props.pictures.length}
					</span>
				</div>
			</div>
		);
	}
}
