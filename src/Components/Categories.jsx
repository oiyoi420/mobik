import React from 'react'

export class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [
        {
          key: "valenki",
          name: "valenki"
        },
        {
          key: "sapogi",
          name: "sapogi"
        },
        {
          key: "sneakers",
          name: "sneakers"
        },
        {
          key: "govnodavy",
          name: "govnodavy"
        }
      ]
    };
  }

  render() {
    return(
      <div className = "Categories">
        {this.state.categories.map(el => (
          <div key = {el.id} onClick = {() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
