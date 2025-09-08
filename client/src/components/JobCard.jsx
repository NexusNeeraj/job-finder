// import { Card, Text, Group, Badge, Button } from "@mantine/core";

// const JobCard = ({ job, onDelete }) => {
//   return (
//     <Card shadow="sm" padding="lg" radius="md" withBorder>
//       <Group position="apart">
//         <Text weight={600}>{job.jobTitle}</Text>
//         <Badge>{job.jobType}</Badge>
//       </Group>
//       <Text size="sm" mt="sm">
//         {job.companyName} - {job.location}
//       </Text>
//       <Text size="sm" mt="xs" color="dimmed">
//         💰 {job.salaryRange.min} - {job.salaryRange.max}
//       </Text>
//       <Group mt="md">
//         <Button size="xs" color="blue">
//           Edit
//         </Button>
//         <Button size="xs" color="red" onClick={() => onDelete(job._id)}>
//           Delete
//         </Button>
//       </Group>
//     </Card>
//   );
// };

// export default JobCard;

import { Card, Group, Text, Button, Badge } from "@mantine/core";

export default function JobCard({ job }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group position="apart" mb="xs">
        <Text fw={600} size="lg">{job.jobTitle}</Text>
        <Badge color="green" variant="light">24h ago</Badge>
      </Group>

      <Text size="sm" c="dimmed">{job.companyName} • {job.location}</Text>
      <Text size="sm" mt="xs" lineClamp={2}>{job.jobDescription}</Text>

      <Group position="apart" mt="md">
        <Text fw={500}>₹{job.salaryRange.min} - ₹{job.salaryRange.max}</Text>
        <Button size="xs" color="blue">Apply Now</Button>
      </Group>
    </Card>
  );
}
