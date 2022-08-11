// which tags to search from
const tags = ["span", "p"];

// take searchStr and tag name to search for elements
const getElementsByText = function (str, tag = "a") {
	return Array.prototype.slice
		.call(document.getElementsByTagName(tag))
		.filter((el) => el.textContent.includes(str));
};

// adding gst price to elements
const showGSTPrice = function (priceEls) {
	priceEls.forEach((el) => {
		let valueElement = el.textContent;
		let rawValue = Number(valueElement.split(" ")[1].replaceAll(",", ""));
		let gstValue = (rawValue * 1.18).toFixed(1);
		el.textContent = `₨ ${rawValue}(${gstValue})`;
	});
};

// looping over tags to search in particular tag
tags.forEach((tag) => {
	const priceEls = getElementsByText("Rs", tag);
	showGSTPrice(priceEls);
});
