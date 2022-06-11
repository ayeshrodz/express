// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc    Set project
// @route   POST /api/projects
// @access  Private
const createProject = (req, res) => {
    res.status(200).json({message: 'Set goals'})
}

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
}

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
}



module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
}