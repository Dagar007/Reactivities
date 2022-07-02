import { observer } from 'mobx-react-lite';
import { Button, ButtonGroup, Card, Image } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store'


export default observer(function ActivityDetails() {

  const {activityStore} = useStore();
  const {selectedActivity: activity, cancelSelectedActivity, openForm} = activityStore

  if(!activity) return <LoadingComponent content='Loading...'/>;
  return (
    <Card fluid>
    <Image src={`/assets/categoryImages/${activity?.category}.jpg`} />
    <Card.Content>
      <Card.Header>{activity?.title}</Card.Header>
      <Card.Meta>
        <span>{activity.date}</span>
      </Card.Meta>
      <Card.Description>
        {activity.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <ButtonGroup widths={2}>
        <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
        <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel'/>
      </ButtonGroup>
    </Card.Content>
  </Card>
  )
})

