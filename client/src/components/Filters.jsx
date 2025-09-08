import { useState } from "react";
import { TextInput, Select, Group, Button, Slider, Box } from "@mantine/core";
import { IconSearch, IconMapPin, IconBriefcase } from "@tabler/icons-react";

export default function Filters({ onFilter }) {
  const [filters, setFilters] = useState({
    jobTitle: "",
    location: "",
    jobType: "",
    salaryRange: [50000, 80000],
  });

  const handleChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const applyFilters = () => {
    if (onFilter) onFilter(filters);
  };

  return (
    <Box
      p="md"
      mb="lg"
      sx={{
        background: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Group grow spacing="md">
        {/* Job Title Search */}
        <TextInput
          leftSection={<IconSearch size={16} />}
          placeholder="Search By Job Title, Role"
          value={filters.jobTitle}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
        />

        {/* Location */}
        <Select
          leftSection={<IconMapPin size={16} />}
          placeholder="Preferred Location"
          data={["Chennai", "Bangalore", "Delhi", "Remote"]}
          value={filters.location}
          onChange={(val) => handleChange("location", val)}
        />

        {/* Job Type */}
        <Select
          leftSection={<IconBriefcase size={16} />}
          placeholder="Job type"
          data={["Full-time", "Part-time", "Contract", "Internship"]}
          value={filters.jobType}
          onChange={(val) => handleChange("jobType", val)}
        />

        {/* Salary Range */}
        <Box sx={{ minWidth: 220 }}>
          <div className="text-sm text-gray-600 mb-1">
            Salary Per Month
          </div>
          <Slider
            min={10000}
            max={200000}
            step={5000}
            value={filters.salaryRange}
            onChange={(val) => handleChange("salaryRange", val)}
            marks={[
              { value: 50000, label: "₹50k" },
              { value: 80000, label: "₹80k" },
            ]}
          />
        </Box>

        {/* Apply Button */}
        <Button color="violet" onClick={applyFilters}>
          Apply
        </Button>
      </Group>
    </Box>
  );
}
