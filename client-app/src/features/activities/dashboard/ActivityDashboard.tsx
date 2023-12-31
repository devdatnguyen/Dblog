import React from "react";
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities : Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity : Activity)=> void;
    deleteActivity:(id : string) => void;
    submitting : boolean;
}

export default function ActivityDashboard(props : Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={props.activities} 
                    selectActivity={props.selectActivity}
                    deleteActivity={props.deleteActivity}
                    submitting = {props.submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {props.selectedActivity && !props.editMode &&
                <ActivityDetails 
                activity={props.selectedActivity} 
                cancelActivity = {props.cancelActivity} 
                openForm = {props.openForm}
                />}
                {props.editMode &&
                <ActivityForm 
                    activity={props.selectedActivity} 
                    closeForm ={props.closeForm} 
                    createOrEdit={props.createOrEdit}
                    submitting = {props.submitting} 
                />
                }
            </Grid.Column>
        </Grid>
    )
}