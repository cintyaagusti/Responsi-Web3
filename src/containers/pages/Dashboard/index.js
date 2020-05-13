import React, { Component, Fragment } from 'react';
import './Dashboard.scss';
import { addDataToAPI, getDataFromAPI, updateDataAPI, deleteDataAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';
import { Avatar } from 'antd';
import { Button, Layout } from 'antd';

const { Header, Content } = Layout;

class Dashboard extends Component {
  state = {
    title: '',
    content: '',
    date: '',
    textButton: 'SIMPAN',
    articleId: ''
  }

  // componentDidMount () {
  //   const userData = localStorage.getItem('userData')
  //   console.log('dashboard :', JSON.parse(userData))
  // }

  // getDataFirebase = () =>  {
  //   const starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
  // }

  componentDidMount () {
    const userData = JSON.parse(localStorage.getItem('userData'));
    this.props.getArticles(userData.uid);
  }

  handleUploadArticles = () => {
    const {title, content, textButton, articleId} = this.state;
    const {uploadArticles, updateArticles} = this.props;
    const userData = JSON.parse(localStorage.getItem('userData'))

    const data = {
      title: title,
      content: content,
      date: new Date().getTime(),
      userId: userData.uid
    }

    if (textButton === 'SIMPAN') {
      uploadArticles(data)
    } else {
      data.articleId = articleId;
      updateArticles(data)
    }
    
    console.log(data)
  }

  onInputChange = (e, type) => {
    this.setState ({
      [type] : e.target.value
    })
  }

  updateArticles = (article) => {
    console.log(article)
    this.setState ({
      title: article.data.title,
      content: article.data.content,
      textButton: 'UPDATE',
      articleId: article.id
    })
  }

  cancelUpdate = () => {
    this.setState ({
      title: '',
      content: '',
      textButton: 'SIMPAN'
    })
  }  
    deleteArticle = (e, article) => {
      e.stopPropagation();
      const {deleteArticle} = this.props;
      const userData = JSON.parse(localStorage.getItem('userData'))
      const data = {
        userId: userData.uid,
        articleId: article.id,
      }
      deleteArticle(data)
    }
  

    render() {
      const {title, content, textButton} = this.state;
      const {articles} = this.props;
      const {updateArticles, cancelUpdate, deleteArticle} = this;
      console.log('articles: ', articles);

        return(
          <Layout>
            <Header className="header">
              
            </Header>

            <Layout>
              <Content>
                <div className="container">
                  <div className="input-form">
                      <div className="sub-title">
                        <h1>Title</h1>
                      </div>
                 
                        <input placeholder="Title" className="input-title" value={title} onChange={(e) => this.onInputChange(e, 'title')}/>
                        
                        <div className="sub-content">
                          <h1>Content</h1>
                        </div>
                              
                          <textarea placeholder="Content" className="input-content" value={content} onChange={(e) => this.onInputChange(e, 'content')}>

                          </textarea>
                              
                            <div className="action-wrapper">
                              {
                              textButton === 'UPDATE' ? (
                                <button className="upload-btn cancel" onClick={this.handleUploadArticles} onClick={cancelUpdate}> Cancel </button>  
                              ) : 
                            <div/>
                              }
                            <button className="upload-btn" onClick={this.handleUploadArticles}> {textButton} </button>    
                  </div>
                </div>
             
                <hr/>

                  <div className="list-published">
                    <h1>List of Your Published Articles : </h1>
                  </div>

                {
                  articles.length > 0 ? (
                    <Fragment>
                      {
                        articles.map(article => {
                          return (
                            <div className="card-content" key={article.id} onClick={() => updateArticles (article)}>
                              <p className="title"> {article.data.title} </p>
                              <p className="date"> {article.data.date} </p>
                              <p className="content"> {article.data.content} </p>
                              <div className="delete-button" onClick={(e) => deleteArticle(e, article)}> 
                                  <Button type="primary" shape="round" danger>
                                    Delete
                                  </Button>
                                </div>
                            </div>
                          )
                        })
                      }
                    </Fragment>
                    
                  ) : null
                }
                
            </div>
            </Content>
            </Layout>
            
          </Layout>
        )
    }
  }

const reduxState = (state) => ({
  userData: state.user,
  articles: state.articles
})  

const reduxDispatch = (dispatch) => ({
  uploadArticles : (data) => dispatch(addDataToAPI(data)),
  getArticles : (data) => dispatch(getDataFromAPI(data)),
  updateArticles : (data) => dispatch(updateDataAPI(data)),
  deleteArticle : (data) => dispatch(deleteDataAPI(data)),
})

export default connect(reduxState, reduxDispatch)(Dashboard);