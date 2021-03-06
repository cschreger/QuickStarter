class User < ApplicationRecord
    validates :name, :email, :session_token, presence: true, uniqueness: true 
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    attr_reader :password
    after_initialize :ensure_session_token

    has_many :projects,
        foreign_key: :creator_id,
        class_name: 'Project'
    
    has_many :backings,
        foreign_key: :backer_id,
        class_name: "Backing"

    has_many :backed_projects,
        through: :backings,
        source: :project


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil 
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end