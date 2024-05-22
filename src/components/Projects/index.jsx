import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import axios from 'axios';

function Projects(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://api.github.com/users/danilobarros3/repos')
      .then(response => {
        const repos = response.data.map(repo => ({
          name: repo.name,
          description: repo.description || "Sem descrição",
          link: repo.html_url
        }));
        setItems(repos);
      })
      .catch(error => console.error("Erro ao buscar os repositórios do GitHub", error));
  }, []);

  return (
    <Carousel style={{ background: "#212121", width: "100%", height: "100%" }}>
      {
        items.map((item, i) => <Item key={i} item={item} />)
      }
    </Carousel>
  );
}

function Item(props) {
  return (
    <section className='Projects'>
      <h2>Meus projetos pessoais</h2>
      <div className='card'>
        <Paper style={{ background: "#212121", padding: '20px' }}>
          <h2 style={{ color: "#4f4f4f" }}>{props.item.name}</h2>
          <p style={{ textAlign: "center", color: "#27AE60", maxWidth: '80%', margin: '0 auto' }}>{props.item.description}</p>
          <Button className="checkbutton" href={props.item.link} target="_blank" style={{ color: "#27AE60", paddingLeft: 0, justifyContent: 'flex-start' }}>
            Ver mais
          </Button>
        </Paper>
      </div>
    </section>
  );
}


export default Projects;
