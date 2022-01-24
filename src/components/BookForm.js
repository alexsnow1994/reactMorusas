import React from 'react';

export default function BookForm() {
  return (
      <>
        <div className='container-fluid'>
        <form id="book-form" className="card card-body">
                    <div className="form-group mb-3">
                        <input id="title" type="text" name="title" className="form-control" placeholder="book-title" autofocus />
                    </div>
                    <div className="form-group mb-3">
                        <input id="author" type="text" name="author" className="form-control" placeholder="Author" />
                    </div>
                    <div className="form-group mb-3">
                        <input id="isbn" type="text" name="ISBN" className="form-control" placeholder="ISBN" />
                    </div>
                    <div className="form-group mb-3">
                        <input  type="text" name="update" className="form-control" placeholder="Update" />
                        <a href="#" id="updateBook" className="btn btn-primary warning update">Update</a>
                    </div>
                    <div className="input-group mb-3">
                        <div class='custom-file' >
                            
                            <label className="custom-file-label" for="image">ELIGE UNA IMAGEN</label>
                            <input type="file" className="custom-file-input" id="image" />
                        </div>
                    </div>
                    <button className="btn btn-primary">
                            Save Book
                        </button>
                      

                </form>
        </div>
      </>
  );
}
