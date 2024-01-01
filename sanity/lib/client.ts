import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skFcVnhgUg1Qy8nOHcxESrQ8j5hvHwrnITXgGUPlqDL4aLhx5Rwo2aVMw0T8UMvYlFQfcrX4JXK4PZCuQbz0MSSRjfLdSbZXQ6ecnIOef65CiwCZdTOMjHhzfCN5COG4gzknZWTEWBqOlOfKwygZ0O1ZhwJoGXN8QHfV0PkEMNc3NBNDRO3b"
})
