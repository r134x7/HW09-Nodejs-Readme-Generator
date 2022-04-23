// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license.includes("MIT")) {
    // return something
  } else if (license.includes("Apache")) {
    // return something
  } else if (license.includes("Mozilla")) {
    // return something
  } else if (license.includes("GNU")) {
    // return something
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.includes("MIT")) {
    // return something
  } else if (license.includes("Apache")) {
    // return something
  } else if (license.includes("Mozilla")) {
    // return something
  } else if (license.includes("GNU")) {
    // return something
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.includes("MIT")) {
    // return something
  } else if (license.includes("Apache")) {
    // return something
  } else if (license.includes("Mozilla")) {
    // return something
  } else if (license.includes("GNU")) {
    // return something
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  const badge = renderLicenseBadge(data.license)

  const link = renderLicenseLink(data.license)

  const section = renderLicenseSection(data.license) 

  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Contents
  
  ${data.contents}

  ## Installation
  
  ${data.installation}

  ## Usage
  
  ${data.usage}

  ## Licensing
  
  ${data.license}

  ## Contributing
  
  ${data.contributing}

  ## Test
  
  ${data.tests}

  ## Questions
  
  ${data.questions}

`;
}

module.exports = generateMarkdown(data);
