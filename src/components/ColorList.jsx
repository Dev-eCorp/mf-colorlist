import React from "react";
import Swal from "sweetalert2";

const ColorList = ({ colorList = [], handleClickClearColors }) => {
	const handleCopyColor = (color) => {
		navigator.clipboard.writeText(color);

		Swal.fire({
			position: "top-end",
			icon: "success",
			title: `Color: ${color} copied to clipboard`,
			showConfirmButton: false,
			timer: 1500,
			timerProgressBar: true,
		});
	};

	return (
		<>
			{colorList.length > 0 && (
				<button
					className="btn btn-danger my-4 w-100"
					onClick={handleClickClearColors}
				>
					Clear list
				</button>
			)}
			<div className="list-group text-center">
				{colorList.length > 0 ? (
					colorList.map((color, index) => (
						<button
							key={index}
							type="button"
							className="list-group-item list-group-item-action text-white"
							aria-current="true"
							title="Copy"
							style={{
								backgroundColor: color,
								fontWeight: "bold",
							}}
							onClick={() => handleCopyColor(color)}
						>
							{color}
						</button>
					))
				) : (
					<div className="alert alert-danger" role="alert">
						<b>No colors selected</b>
					</div>
				)}
			</div>
		</>
	);
};

export default ColorList;
