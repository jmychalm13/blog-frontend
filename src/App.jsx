/* eslint-disable react/no-unescaped-entities */
function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title:
          <input type="text" />
        </div>
        <div>
          Body:
          <input type="textarea" />
        </div>
        <div>
          Image:
          <input type="text" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function PostsIndex(props) {
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="an image" />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Some Title",
      body: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corporaquaeritis. Summus brains sit morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Himindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebellaviventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesheater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.",
      image:
        "https://images.unsplash.com/photo-1526547462705-121430d02c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8em9tYmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 2,
      title: "The Cupcake One",
      body: "Cake lollipop pie cheesecake muffin powder. Wafer cookie I love oat cake I love jelly. Dragée I love sesamesnaps cheesecake I love bear claw sweet roll donut. Marshmallow marzipan pie carrot cake danish. Tiramisu tartchocolate tiramisu pie gummi bears sesame snaps danish. Icing dragée soufflé chupa chups liquorice danish piecroissant. Oat cake shortbread powder chocolate bar chupa chups icing sugar plum tart pudding. Halvah tiramisu sesame snaps I love sesame snaps powder toffee. Cupcake tart dragée I love apple pie donut.",
      image:
        "https://images.unsplash.com/photo-1607478900766-efe13248b125?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y3VwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    },
    {
      id: 3,
      title: "Some Title of the Future",
      body: "Tell her she looks thin. Why would a robot need to drink? Is today's hectic lifestyle making you tense and impatient? I love this planet! I've got wealth, fame, and access to the depths of sleaze that those things bring. You lived before you met me?! You can see how I lived before I met you. Can I use the gun? That's the ONLY thing about being a slave. It's okay, Bender. I like cooking too. There's one way and only one way to determine if an animal is intelligent. Dissect its brain! I had more, but you go ahead. No, of course not. It was… uh… porno. Yeah, that's it.",
      image:
        "https://images.unsplash.com/photo-1503745328377-1f4355a2284b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dWZvfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
