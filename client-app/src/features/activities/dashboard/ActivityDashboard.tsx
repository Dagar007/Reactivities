import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";

export default observer (function ActivityDashboard() {
    const {activityStore} = useStore();
    const {loadActivities, activityRegistry} = activityStore
    useEffect(()=> {
      if(activityRegistry.size <= 0) loadActivities();
    },[activityRegistry.size, loadActivities])
  
    if(activityStore.loadingInitial) return <LoadingComponent content='Loading App'/>
    return(
        <Grid>
            <GridColumn width='10'>
                <ActivityList  />  
            </GridColumn>
            <Grid.Column width='6'>
                <h2>Activity filter</h2>
            </Grid.Column>
        </Grid>
    )
})