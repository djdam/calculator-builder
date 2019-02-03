import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';

const renderField = (field) => (
    <ListItem>
        <ListItemAvatar>
            <Avatar>
                <FolderIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={field.name}
            secondary={field.type}
        />
    </ListItem>
);

export default class FieldList extends Component {
    render() {
        const { fields } = this.props;
        return (
            <Grid container spacing={16}>
                <List>{fields.map(renderField)}</List>
            </Grid>
        )
    }

}