import styles from '@/styles/modules/Search.module.scss'
import { Container } from '@mui/material'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const jobType = [
  { label: 'Job Type 1' },
  { label: 'Job Type 2' },
  { label: 'Job Type 3' },
  { label: 'Job Type 4' },
  { label: 'Job Type 5' }
]

const jobPosition = [
  { label: 'Job Position 1' },
  { label: 'Job Position 2' },
  { label: 'Job Position 3' },
  { label: 'Job Position 4' },
  { label: 'Job Position 5' }
]

const jobLocation = [
  { label: 'Job Location 1' },
  { label: 'Job Location 2' },
  { label: 'Job Location 3' },
  { label: 'Job Location 4' },
  { label: 'Job Location 5' }
]

const SortBy = [
  { label: 'Sort 1' },
  { label: 'Sort 2' },
  { label: 'Sort 3' },
  { label: 'Sort 4' },
  { label: 'Sort 5' }
]

const Medium = [
  { label: 'Medium 1' },
  { label: 'Medium 2' },
  { label: 'Medium 3' },
  { label: 'Medium 4' },
  { label: 'Medium 5' }
]

const Subject_Matter = [
  { label: 'Subject Matter 1' },
  { label: 'Subject Matter 2' },
  { label: 'Subject Matter 3' },
  { label: 'Subject Matter 4' },
  { label: 'Subject Matter 5' }
]

const Availability = [
  { label: 'Full-time' },
  { label: 'Contract' },
  { label: 'Freelance' }
]

const SearchFilters = ({ value }: { value: number }) => {
  const ArtworkFilters = () => {
    return (
      <>
        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={SortBy}
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label='Sort by' />}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={Medium}
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label='Medium' />}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={Subject_Matter}
            sx={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label='Subject Matter' />
            )}
          />
        </div>
      </>
    )
  }

  const JobFilters = () => {
    return (
      <>
        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={jobType}
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label='Job Type' />}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={jobPosition}
            sx={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label='Job Position' />
            )}
          />
        </div>

        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={jobLocation}
            sx={{ width: 300 }}
            renderInput={params => <TextField {...params} label='Location' />}
          />
        </div>
      </>
    )
  }

  const ArtistFilters = () => {
    return (
      <>
        <div>
          <Autocomplete
            disablePortal
            id='combo-box-demo'
            options={Availability}
            sx={{ width: 300 }}
            renderInput={params => (
              <TextField {...params} label='Availability' />
            )}
          />
        </div>
      </>
    )
  }

  const HandleFilterView = () => {
    switch (value) {
      case 0:
        return <ArtworkFilters />
      case 1:
        return <JobFilters />
      case 2:
        return <ArtistFilters />
      default:
        ;<ArtworkFilters />
    }
  }

  return (
    <Container
      maxWidth={false}
      disableGutters
      className={styles.filterContainer}
    >
      <HandleFilterView />
    </Container>
  )
}

export default SearchFilters
