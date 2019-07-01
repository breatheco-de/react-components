import React from "react";
import PropTypes from "prop-types";
import "./github-card.scss";
import { Link } from 'react-router-dom'

class GithubCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      typing: false
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/" + this.props.gitUsername)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
     
      });
  }

  render() {
    let { data } = this.state;
    // let {username} = this.props.gitUsername;
    return (
      <div className="card border-muted">
        <div className="card-header border-muted bg-transparent d-inline-flex p-2">
          <div className="col-3 ">
            {data && (
              <img
                src={data.avatar_url}
                alt="..."
                className="img-fluid rounded"
              />
            )}
          </div>
          <div className="col-9 d-flex flex-column">
            {data ? <strong>{data.name}</strong> : "loading"}
            {data ? (
              <span>{"@" + this.props.gitUsername}</span>
            ) : (
              <span>"No Git User"</span>
            )}
          </div>
        </div>
        <div className="card-body border-muted d-inline-flex p-0">
          <div className="col-4 border-right border-muted d-flex flex-column py-1 text-dark">
            {data && (
              <a
                className="text-dark"
                href={
                  "https://github.com/" +
                  this.props.gitUsername +
                  "?tab=repositories"
                }
                target="_top"
              >
                {data ? (
                  <span className="mr-1 ">
                    <strong>{data.public_repos}</strong>
                  </span>
                ) : (
                  <span>
                    <strong>0</strong>
                  </span>
                )}
                Repos
              </a>
            )}
          </div>
          <div className="col-4 border-right border-muted d-flex flex-column py-1 text-dark">
            {data && (
              <a
                className="text-dark"
                href={"https://gist.github.com/" + this.props.gitUsername}
                target="_top"
              >
                {data ? (
                  <span className="mr-1">
                    <strong>{data.public_gists}</strong>
                  </span>
                ) : (
                  <span>
                    <strong>0</strong>
                  </span>
                )}
                Gists
              </a>
            )}
          </div>
          <div className="col-4 d-flex flex-column py-1 text-dark">
            {data && (
              <a
                className="text-dark"
                href={
                  "https://github.com/" + this.props.gitUsername + "/followers"
                }
                target="_top"
              >
                {data ? (
                  <span className="mr-1">
                    <strong>{data.followers}</strong>
                  </span>
                ) : (
                  <span>
                    <strong>0</strong>
                  </span>
                )}
                Followers
              </a>
            )}
          </div>
        </div>
        <div className="card-footer border-muted bg-transparent">
          {data && data.bio && (
            <div className="footer">
              <h6 className="mb-0">{data.bio}</h6>
            </div>
          )}
        </div>
      </div>
    );
  }
}
GithubCard.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  
  gitUsername: PropTypes.string.isRequired
};
GithubCard.defaultProps = {
  
  gitUsername: null
};
export default GithubCard;