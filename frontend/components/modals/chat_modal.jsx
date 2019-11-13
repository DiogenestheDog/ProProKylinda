import React from 'react';
import { connect } from 'react-redux';

class PostModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
            photoUrl: "",
            postHeader: "",
            postBody: "",
            imageUrl: "",
            imageFile: null
        };
        this.dispatchPost = this.dispatchPost.bind(this);
    }

    dispatchPost(e) {
        e.preventDefault();

        const { header, body } = this.state;
        const user_id = this.props.user.id;
        let formData = new FormData();

        formData.append('post[header]', header ? header : null);
        formData.append('post[body]', body ? body : null);
        formData.append('post[user_id]', user_id ? user_id : null);
        formData.append('post[post_type]', "chat");

        this.props.createPost(formData);
        this.setState({
            header: "",
            body: ""
        });
    }

    boldify(str) {
        return "woof";
        // checks if line has has colon if does everything before it becomes bold
        // everything before first colon
        // only one per \n

        // take input text and split on \n
        // check for :
        // if first :
        // yes bold everything before and including :
        // dont change anything
        //
    }

    update(type) {
        // run boldify if last char typed is :
        // return e => this.setState({
        //     [type]: e.currentTarget.value
        // });

        return e => {
            if (type === "body") {
                let lastChar = e.currentTarget.value[e.currentTarget.value.length - 1];
                console.log(lastChar);
                if (lastChar === ":") {
                    this.setState({
                        [type]: "honk"
                    });
                } else {
                    this.setState({
                        [type]: e.currentTarget.value
                    });
                }
            }
        }
    }

    render() {
        const { username } = this.props.user
        return (
            <div className="post-modal-container">
                <h4 className="pf-username">{username}</h4>
                <form className="post-form">
                    <input type="text" className="post-header" value={this.state.header} onChange={this.update('header')} placeholder="Title" />
                    <div contentEditable="true" className="post-body" type="text" value={this.state.body} onChange={this.update('body')} placeholder="Michelle: hOnK" />
                    <button onClick={this.dispatchPost} type="submit">Do it</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ session, entities: { users: users } }) => ({
    user: users[session.id]
});

const mapDispatchToProps = ({
    createPost: post => dispatchEvent(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);