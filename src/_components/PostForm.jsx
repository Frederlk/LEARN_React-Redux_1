import React from "react";
import { connect } from "react-redux/es/exports";
import { createPost, showAlert } from "../redux/actions";
import Alert from "./Alert";

class PostForm extends React.Component {
    constructor(props) {
        super();

        this.state = {
            title: "",
        };
    }

    submitHandler = (e) => {
        e.preventDefault();
        const { title } = this.state;
        if (!title.trim()) {
            return this.props.showAlert("Please enter text");
        }
        const newPost = {
            title,
            id: Date.now().toString(),
        };
        this.props.createPost(newPost);
        this.setState({ title: "" });
    };

    changeInputHandler = (e) => {
        e.persist();
        this.setState((prev) => ({
            ...prev,
            ...{
                [e.target.name]: e.target.value,
            },
        }));
    };

    render() {
        return (
            <form onSubmit={this.submitHandler} className="form">
                {this.props.alert && <Alert text={this.props.alert} />}
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        autoComplete="off"
                        type="text"
                        name="title"
                        placeholder="Your Post"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button type="submit" className="btn btn-success">
                    submit
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    createPost,
    showAlert,
};

const mapStateToProps = (state) => ({ alert: state.appReducer.alert });

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
