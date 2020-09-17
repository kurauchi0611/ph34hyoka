import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { ThemeProvider } from "@material-ui/styles";
import Theme from "../themes/Theme"
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
import { Inertia } from '@inertiajs/inertia'
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'プロフィール', url: 'profile' },
  { title: '記事', url: 'post' },
  { title: 'なんか1', url: '#' },
  { title: 'なんか2', url: '#' },
  { title: 'なんか3', url: '#' },
  { title: 'なんか4', url: '#' },
  { title: 'なんか5', url: '#' },
  { title: 'なんか6', url: '#' },
  { title: 'お問い合わせ', url: 'contact' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

// const posts = [post1, post2, post3];

const sidebar = {
  title: '自己紹介',
  description:
    `こんにちは \n 🎉元気です！🎉`,
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/kurauchi0611/" },
    { name: 'Twitter', icon: TwitterIcon, url: "https://twitter.com/JHB892" },
    // { name: 'Facebook', icon: FacebookIcon },
  ],
};

export default function Layout({ children }) {
  const classes = useStyles();
  const Urls = ["/dashboard", "/drafts", "/posting"];
  const nowUrl = history.state.url;
  const [category,setCategory]=React.useState([]);
  React.useEffect(() => {
    const fetchData=async()=>{
      const res = await Axios.get("/api/category")
      // console.log(res);
      setCategory(res.data);
    }
    fetchData()
  }, [])
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="倉内のブログ" sections={sections} user={children.props.user} />
        <main>
          {
            !Urls.includes(nowUrl) &&
            <MainFeaturedPost post={mainFeaturedPost} />
          }
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid> */}
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" isLogin={Urls.includes(nowUrl)} >
              {children}
            </Main>
            {
              !Urls.includes(nowUrl) &&
              <Sidebar
                title={sidebar.title}
                description={sidebar.description}
                archives={category}
                social={sidebar.social}
              />
            }
          </Grid>
        </main>
      </Container>
      <Footer title="倉内のブログのフッター" description="評価5Aください！！！！" />
    </ThemeProvider>
  );
}
