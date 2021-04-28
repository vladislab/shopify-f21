import React, { useEffect } from 'react';
import {
  Button,
  Divider,
  List,
  ListItem,
  Paper,
  Typography,
} from '@material-ui/core';
import NominateItem from './NominateItem';
import '../styles/NominationList.css';
import { Delete, LocalActivity, Save, Inbox } from '@material-ui/icons';
import { Container, Draggable } from 'react-smooth-dnd';

export default function NominationList(props) {
  const [isSaved, setIsSaved] = React.useState(false);

  useEffect(() => {
    setIsSaved(false);
  }, [props.list]);

  return (
    <div className={`container ${!props.mobile ? '-desktop' : ''}`}>
      <h6 className="container-title">
        {<LocalActivity className="icon" />}Your nominations
      </h6>
      <Paper className="paper">
        <List>
          <Container
            dragHandleSelector=".drag-handle"
            lockAxis="y"
            onDrop={props.onDrop}
          >
            {!!props.list.length ? (
              props.list.map((movie, id) => (
                <Draggable key={props.id}>
                  <NominateItem
                    {...movie}
                    denominate={props.denominate}
                    mobile={props.mobile}
                  />
                </Draggable>
              ))
            ) : (
              <ListItem>
                <Typography className="empty">
                  <Inbox />
                  List empty
                </Typography>
              </ListItem>
            )}
          </Container>
          <Divider />
          <div className="nom_buttons">
            <Button
              onClick={() => {
                props.clear();
              }}
              variant="contained"
              color="secondary"
              startIcon={<Delete />}
              size="small"
              disabled={!props.list.length}
            >
              Discard
            </Button>
            <Button
              onClick={(e) => {
                props.save();
                setIsSaved(true);
              }}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<Save />}
              disabled={isSaved || !props.list.length}
            >
              {isSaved ? 'Saved' : 'Save'}
            </Button>
          </div>
        </List>
      </Paper>

      <h6 className="nom_subtitle">
        Your list is saved in your browser's storage so you can always come back
        later.
      </h6>
    </div>
  );
}
