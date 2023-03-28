
</a>
);
});
setData(images);
} else {
alert("No image to display");
}
};
return (
<>
<div className="detail-check">
<p className="detail-description">
  After you upload the file Now you check whether the file is uploaded
  or not by putting the transaction address
</p>
<div className="address-check">
  <div className="address-fill">
    <input
      type="text"
      className="address"
      placeholder="enter-address"
    ></input>
    <span className="search-icon" onClick={getdata}>
      <i class="fa-solid fa-magnifying-glass"></i>
    </span>
  </div>
</div>
<div className="image-show">{data}</div>
</div>
</>
);
};
export default Display;