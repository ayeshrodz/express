const asyncHandler = require('express-async-handler')


// @desc    Get projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler(async (req, res) => {
    res.json({message: 'Get projects'})
})

// @desc    Set project
// @route   POST /api/projects
// @access  Private
const createProject = asyncHandler(async (req, res) => {
    if(!req.body.name) {
        res.status(400)
        throw new Error('Please add a name for the project')
    }

    res.status(200).json({message: 'Set projects'})
})

// @desc    Update a project
// @route   PUT /api/projects/:id
// @access  Private
const updateProject = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update project ${req.params.id}`})
})

// @desc    Delete a project
// @route   DELETE /api/projects/:id
// @access  Private
const deleteProject = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete project ${req.params.id}`})
})



module.exports = {
    getProjects,
    createProject,
    updateProject,
    deleteProject,
}