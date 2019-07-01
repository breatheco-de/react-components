import React from "react";
import PropTypes from "prop-types";

const Modal = ({ show, title, children, onConfirm, onCancel }) => (
	<div
		className="bcmodal modal"
		tabIndex="-1"
		role="dialog"
		style={{
			display: show ? "block" : "none"
		}}>
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<h5 className="modal-title">{title}</h5>
				</div>
				<div className="modal-body">{children}</div>
                {onConfirm || onCancel && (
                    <div className="modal-footer">
                        {onConfirm !== null && (
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => onConfirm()}>
                            Save changes
                        </button>
                        )}
                        {onCancel !== null && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-dismiss="modal"
                                onClick={() => onCancel()}>
                                Close
                            </button>
                        )}
				</div>
                )}
			</div>
		</div>
	</div>
);
Modal.propTypes = {
	// You can declare that a prop is a specific JS primitive. By default, these
	// are all optional.
	show: PropTypes.bool,
	title: PropTypes.string,
	children: PropTypes.node.isRequired,
	onCancel: PropTypes.func,
	onConfirm: PropTypes.func
};
Modal.defaultProps = {
	show: true,
	title: "",
	children: null,
	onConfirm: null,
	onCancel: null
};
export default Modal;
